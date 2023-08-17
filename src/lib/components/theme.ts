import { writable } from "svelte/store"

type Theme = 'light' | 'dark' 

const userTheme
const theme = writable()