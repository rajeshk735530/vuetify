<template>    
    <div class="team">
        <h1 class="subheading grey--text mt-2">Team</h1>

        <v-container class="my-5">

            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
                    <v-card text class="text-center ma-3">
                        <v-responsiv class="pt-4">
                            <v-avatar class="mt-4 grey" size="150">
                                <img :src="person.avatar" alt="">
                            </v-avatar>
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
                    { name: 'The Net Ninja', role: 'web developer', avatar: '/img-1.png' },
                    { name: 'Ruy', role: 'Graphic desingner', avatar: '/img-4.png' },
                    { name: 'Chun li', role: 'web developer', avatar: '/img-2.png' },
                    { name: 'Gouken', role: 'Social media maverick', avatar: '/img-4.png' },
                    { name: 'Yoshi', role: 'Sales 343434', avatar: '/img-3.png' },
                    { name: '3333', role: 'Sales 766767', avatar: '/img-5.png' },
                    { name: 'rt55', role: 'fdfd76767 guru', avatar: '/img-4.png' },
                    { name: '232', role: '3434 guru', avatar: '/img-5.png' },
                    { name: 'Yoshi ggg55', role: 'Sales wew4545', avatar: '/img-2.png' },
                ]
            }
        }
    }
</script>