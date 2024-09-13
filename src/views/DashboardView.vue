<template>
    <div class="dashboard">
        <h1 class="subheading grey--text mt-2">Dashboard</h1>

        <v-container class="my-5">

            <v-layout row wrap>
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
            </v-layout>

        </v-container>

    </div>
</template>