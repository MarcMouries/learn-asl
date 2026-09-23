import '@servicenow/sdk/global'
import { SPWidget } from '@servicenow/sdk/core'

export const aslLessonsWidget = SPWidget({
    $id: Now.ID['x_snc_asl_lessons_widget'],
    id: 'x_snc_asl_lessons_widget',
    name: 'ASL Lessons',
    public: true,
    htmlTemplate: Now.include('./template.html'),
    clientScript: Now.include('./client_script.js'),
    serverScript: Now.include('./server_script.js'),
    customCss: Now.include('./styles.css'),
    optionSchema: [
        {
            name: 'title',
            label: 'Title',
            type: 'string',
            section: 'Presentation',
            defaultValue: 'Lessons',
        },
    ],
})
