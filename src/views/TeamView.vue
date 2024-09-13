<template>    
    <div class="team">
        <h1 class="subheading grey--text mt-2">Team</h1>

        <v-container class="my-5">

            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
                    <v-card text class="text-center ma-3">
                        <v-responsiv class="pt-4">
                            image goes here
                        </v-responsiv>
                        <v-card-text>
                            <div class="subheeading">{{ person.name }}</div>
                            <div class="grey--text">{{ person.role }}</div>
                        </v-card-text>

                        <v-card-action>
                            <v-btn text color="blue" class="mb-2 mr-4">
                                <v-icon small left>mdi-message</v-icon>
                                <span>Message</span>
                            </v-btn>
                        </v-card-action>
                    </v-card>
                </v-flex>
            </v-layout>

        </v-container>
        
    </div>
</template>

<script>
    export default {
        data() {
            return{
                team: [
                    { name: 'The Net Ninja', role: 'web developer' },
                    { name: 'Ruy', role: 'Graphic desingner' },
                    { name: 'Chun li', role: 'web developer' },
                    { name: 'Gouken', role: 'Social media maverick' },
                    { name: 'Yoshi', role: 'Sales 343434' },
                    { name: '3333', role: 'Sales 766767' },
                    { name: 'rt55', role: 'fdfd76767 guru' },
                    { name: '232', role: '3434 guru' },
                    { name: 'Yoshi ggg55', role: 'Sales wew4545' },
                ]
            }
        }
    }
</script>