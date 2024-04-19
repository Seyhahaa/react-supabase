
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qymaqvkclvdhxylydjor.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5bWFxdmtjbHZkaHh5bHlkam9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1NDI0OTUsImV4cCI6MjAyODExODQ5NX0.bjGnRIco1lWUL-fjiawZirMdk7Fp2gWMq44M1G4kofY'
export const supabase = createClient(supabaseUrl, supabaseKey)