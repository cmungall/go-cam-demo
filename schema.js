// Auto-generated schema file
window.searchSchema = {
            title: "GO-CAM Catalog",
            description: "Search and filter models by multiple criteria",
            searchPlaceholder: "Search models...",
            searchableFields: ["title", "model_activity_part_of_rollup_label"],
            facets: [
                {
                    field: "taxon", 
                    label: "Taxon",
                    type: "string",
                    sortBy: "count"
                },
                {
                    field: "model_activity_part_of_rollup_label",
                    label: "BP",
                    type: "array",
                    sortBy: "count"
                },
                {
                    field: "number_of_activities",
                    label: "Num annotons",
                    type: "integer",
                    sortBy: "count"
                },
                {
                    field: "model_activity_enabled_by_terms_id",
                    label: "genes",
                    type: "array",
                    sortBy: "count"
                },
                {
                    field: "title",
                    label: "Title",
                    type: "string",
                    sortBy: "alphabetical"
                },
            ],
            displayFields: [
                { field: "title", label: "title", type: "string" },
                { field: "taxon", label: "Taxon", type: "string" },
                { field: "status", label: "Status", type: "string" },
                { field: "model_activity_enabled_by_term_ids", label: "Genes", type: "array" },
                { field: "model_activity_part_of_rollup_label", label: "BP", type: "array" },
                { field: "number_of_activities", label: "Num annotons", type: "integer" },
            ]
        };

// Notify that schema is ready
window.dispatchEvent(new Event('searchDataReady'));
