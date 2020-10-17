const editor = new EditorJS({
    holder: "editorjs",
    tools: {
            Math: {
            class: EJLaTeX,
            shortcut: 'CMD+SHIFT+M',
        }
    },
    data: {
        "time":1602919875295,
        "blocks":[
            {
                "type":"Math",
                "data":{
                    "math":"\\relax{x} = \\int_{-\\infty}^\\infty\\hat\\xi,e^{2 \\pi i \\xi x},d\\xi"
                }
            }
        ],
        "version":"2.19.0"
    }
});