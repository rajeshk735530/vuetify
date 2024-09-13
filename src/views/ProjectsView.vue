<template>
    <div class="project">
        <h1 class="subheading grey--text mt-2">Project</h1>

        <!-- Another Expansion Panel for project details -->
        <v-container class="my-5">
            <v-expansion-panels>
                <v-expansion-panel v-for="project in myProjects" :key="project.title">
                    <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <v-card flat>
                            <v-card-text class="px-4 grey--text">
                                <div class="font-weight-bold">Due by {{ project.due }}</div>
                                <div>{{ project.content }}</div>
                            </v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-container>

    </div>
</template>

<script>
export default {
  data() {
    return {
        projects: [
            { title: 'Desin a new webside', person: 'The nex vue', due: '1st jan 2023', status: 'ongoing', content: 'If you’re using Vuetify 3.x or later, the syntax will be different, so make sure to consult the Vuetify documentation for the correct version you’re using.' },
            { title: 'Desin a new webside... test again', person: 'The nex vue', due: '1st jan 2023', status: 'ongoing', content: 'If you’re using Vuetify 3.x or later, the syntax will be different, so make sure to consult the Vuetify documentation for the correct version you’re using.' },
            { title: 'Colde up the webside', person: 'This is new project', due: '4st may 2022', status: 'completed', content: 'The syntax will be different, so make sure to consult the Vuetify documentation for the correct version you’re using.' },
            { title: 'Desin video side', person: 'The my project', due: '5st jan 2020', status: 'completed', content: 'Will be different, so make sure to consult the Vuetify documentation for the correct version you’re using.,the syntax will be different, so make sure to consult the Vuetify documentation for the correct version you’re using.' },
            { title: 'Creater a new community form.. again', person: 'Well we got peson', due: '6st jun 2024', status: 'overdue', content: 'So make sure to consult the Vuetify documentation for the correct version you’re using.so make sure to consult the Vuetify documentation for the correct version you’re using.' }
        ]// Creates an array with 5 null items for iteration
    }
  },
  computed: {
    myProjects(){
        return this.projects.filter(project => {
            return project.person == 'The nex vue'
        })
    }
  }
}
</script>