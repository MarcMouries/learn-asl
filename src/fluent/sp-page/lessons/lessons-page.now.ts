import '@servicenow/sdk/global'
import { SPPage } from '@servicenow/sdk/core'
import { aslLessonsWidget } from '../../sp-widget/asl-lessons/widget.now'

export const lessonsPage = SPPage({
    pageId: 'x_snc_asl_lessons',
    title: 'Lessons',
    public: true,
    draft: false,
    dynamicTitleStructure: 'Lessons - Learn ASL',
    containers: [
        {
            $id: Now.ID['x_snc_asl_lessons_container_1'],
            name: 'Main Content',
            width: 'container',
            order: 100,
            rows: [
                {
                    $id: Now.ID['x_snc_asl_lessons_row_1'],
                    order: 100,
                    columns: [
                        {
                            $id: Now.ID['x_snc_asl_lessons_col_1'],
                            size: 12,
                            sizeSm: 12,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: Now.ID['x_snc_asl_lessons_instance_1'],
                                    widget: aslLessonsWidget,
                                    order: 100,
                                    active: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})
