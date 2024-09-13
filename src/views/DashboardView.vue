<template>
    <div class="dashboard">
        <h1 class="subheading grey--text mt-2">Dashboard</h1>

        <v-container class="my-5">

            <!-- <v-layout row wrap>
                <v-flex xs12 md6 mb-2>
                    <v-btn outline block class="primary">1</v-btn>
                </v-flex>
                <v-flex xs4 md2>
                    <v-btn outline block class="red">2</v-btn>
                </v-flex>
                <v-flex xs4 md2>
                    <v-btn outline block class="blue">3</v-btn>
                </v-flex>
                <v-flex xs4 md2 mb-2>
                    <v-btn outline block class="yellow">4</v-btn>
                </v-flex>
            </v-layout>

            <v-layout row wrap justify-space-around>
                <v-flex xs4 md3>
                    <v-btn color="green" outline block>1</v-btn>
                </v-flex>
                <v-flex xs4 md3>
                    <v-btn outline block class="red--text">2</v-btn>
                </v-flex>
            </v-layout> -->

            <v-layout row class="pa-5 mb-5">

                <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn small text color="grey" @click="sortBy('title')" v-bind="attrs" v-on="on">
                            <v-icon left small>mdi-folder</v-icon>
                            <span class="caption text-lowercase">By project name</span>
                        </v-btn>
                    </template>
                    <span>Sort project by project name</span>
                </v-tooltip>

                <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn small text color="grey" @click="sortBy('person')" v-bind="attrs" v-on="on">
                            <v-icon left small>mdi-account</v-icon>
                            <span class="caption text-lowercase">By person name</span>
                        </v-btn>
                    </template>
                    <span>Sort project by person</span>
                </v-tooltip>

            </v-layout>

            <v-card text flat class="pa-4" v-for="project in projects" :key="project.title">
                <v-layout row wrap :class="`pa-3 project ${project.status}`">
                    <v-flex xs12 md6>
                        <div class="caption grey--text">Vuetify Dashboard</div>
                        <div>{{ project.title }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Dashboard</div>
                        <div>{{ project.person }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Day by</div>
                        <div>{{ project.due }}</div>
                    </v-flex>
                    <v-flex xs2 sm4 md2>
                        <div>
                            <v-chip small :class="`${ project.status } white--text caption my-2`">{{ project.status
                                }}</v-chip>
                        </div>
                    </v-flex>
                </v-layout>
            </v-card>

        </v-container>

    </div>
</template>

<script>
    export default{
        data() {
            return{
                projects: [
                    { title: 'Desin a new webside', person: 'The nex vue', due: '1st jan 2023', status: 'ongoing', content: 'lo' },
                    { title: 'Colde up the webside', person: 'This is new project', due: '4st may 2022', status: 'completed', content: '' },
                    { title: 'Desin video side', person: 'The my project', due: '5st jan 2020', status: 'completed', content: '' },
                    { title: 'Creater a new community form', person: 'Well we got peson', due: '6st jun 2024', status: 'overdue', content: '' }
                ]
            }
        },
        methods: {
            sortBy(prop){
                this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
            }
        },
    }
</script>

<style>
.project.completed {
border-left: 4px solid #3cd1c2;
}
.project.ongoing {
border-left: 4px solid orange;
}
.project.overdue {
border-left: 4px solid tomato;
}
.v-chip.completed {
background: 4px #3cd1c2 !important;
}
.v-chip.ongoing {
background: 4px orange !important;
}
.v-chip.overdue {
background: 4px tomato !important;
}

</style>