
import { defineConfig } from "@playwright/test";

export default defineConfig({

    testDir : './tests',
    timeout : 60 * 1000,

    use :
    {
        headless : false
    },

    projects :
    [
        {
            name : 'chromium',
            use  :
            {
                browserName : 'chromium'
            }
        },

        

        // {
        //     name : 'firefox',
        //     use  :
        //     {
        //         browserName :'firefox'
        //     }
        // },

        {
            name :'webkit',
            use  :
            {
                browserName : 'webkit'
            }

        }

    ]



});
