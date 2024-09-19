<template>
    <v-dialog max-width="400px">
        <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="success">Add new project</v-btn>
        </template>

        <v-card>
            <v-card-title>
                <h2 class="ml-4">Add a new project</h2>
                <!-- <v-spacer></v-spacer>
                <v-btn icon @click="closeDialog">
                    <v-icon>mdi-close</v-icon>
                </v-btn> -->
            </v-card-title>

            <!-- Form Popup -->
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field v-model="title" label="Title" prepend-icon="mdi-folder" :rules="InputRules"></v-text-field>
                    <v-textarea v-model="content" label="Information" prepend-icon="mdi-pencil" :rules="InputRules"></v-textarea>

                    <v-menu :close-on-content-click="true" max-width="290">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field v-bind="attrs" v-on="on" :value="formattedDate" label="Due date"
                                prepend-icon="mdi-calendar" :rules="InputRules"></v-text-field>
                        </template>
                        <v-date-picker v-model="due"></v-date-picker>
                    </v-menu>

                    <v-btn text class="success mx-0 mt-3" @click="submit">Save project</v-btn>
                </v-form>
            </v-card-text>

        </v-card>
    </v-dialog>
</template>

<script>
import { format } from 'date-fns';
import { collection, addDoc } from 'firebase/firestore';
import db from '@/fb.js';

export default {
    data() {
        return {
            title: '',
            content: '',
            due: null,
            InputRules: [
                v => (v && v.length >= 3) || 'Minimum length is 3 characters'
            ],
        };
    },
    methods: {
        async submit() {
            if (this.$refs.form.validate()) {
                const project = {
                    title: this.title,
                    content: this.content,
                    due: format(new Date(this.due), 'dd MMM yyyy'),
                    person: 'The project',
                    status: 'ongoing',
                };

                try {
                    const docRef = await addDoc(collection(db, 'projects'), project);
                    console.log('Document written with ID: ', docRef.id);
                    // Optionally reset the form fields here
                    this.title = '';
                    this.content = '';
                    this.due = null;
                } catch (error) {
                    console.error('Error adding document: ', error);
                }
            }
        },
    },
    computed: {
        formattedDate() {
            return this.due ? format(new Date(this.due), 'dd MMM yyyy') : '';
        },
    },
};
</script>