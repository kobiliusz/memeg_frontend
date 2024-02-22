<template>
    <v-dialog width="500" v-model="isActive" persistent>
        <v-card :title="$t('message.error')">
            <v-card-text>
                {{ $t("message.message") }}
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text="$t('message.close')" @click="isActive = false" color="error"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

</template>

<script>
export default {
    data() {
        return {
            isActive: false 
        };
    },
    methods: {
        activate() {
            this.isActive = true;
        }
    }
}
</script>