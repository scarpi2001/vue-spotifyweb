import { reactive } from 'vue';

export const store = reactive({
    active: 0,
    results: [],
    newSearch: "",
})