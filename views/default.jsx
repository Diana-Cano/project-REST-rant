const React = require ('react')
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <bpdy>
                {html.children}
            </bpdy>
        </html>
    )
}
module.exports = Def