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
                    type: "curie",
                    sortBy: "count"
                },
                {
                    field: "model_activity_part_of_rollup_label",
                    label: "BP",
                    type: "array",
                    sortBy: "count"
                },
                {
                    field: "model_activity_occurs_in_rollup_label",
                    label: "Location",
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
                    field: "length_of_longest_causal_association_path",
                    label: "Longest path",
                    type: "integer",
                    sortBy: "count"
                },
                {
                    field: "number_of_strongly_connected_components",
                    label: "Num SCCs",
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
                { field: "id", label: "Model ID", type: "curie" },
                { field: "title", label: "title", type: "string" },
                { field: "taxon", label: "Taxon", type: "curie" },
                { field: "status", label: "Status", type: "string" },
                { field: "model_activity_enabled_by_term_ids", label: "Genes", type: "array" },
                { field: "model_activity_part_of_rollup_label", label: "BP", type: "array" },
                { field: "model_activity_occurs_in_rollup_label", label: "BP", type: "array" },
                { field: "model_activity_enabled_by_terms_id", label: "Genes", type: "array" },
                { field: "number_of_activities", label: "Num annotons", type: "integer" },
                { field: "length_of_longest_causal_association_path", label: "Longest path", type: "integer" },
                { field: "number_of_strongly_connected_components", label: "Num SCCs", type: "integer" },
            ]
        };

// Notify that schema is ready
window.dispatchEvent(new Event('searchDataReady'));
