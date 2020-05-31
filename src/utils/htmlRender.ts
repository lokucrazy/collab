import ReactDOM from 'react-dom/server'
import hbs from 'handlebars'
import { ReactElement } from 'react';

export function renderHTML(reactElement: ReactElement, id: string): string {
  const handlebarsID = id.split('-').map((str, index) => index === 0 ? str : (str[0].toUpperCase() + str.substring(1))).join('')
  if (typeof handlebarsID !== 'string' || !handlebarsID) {
    return ''
  }
  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Collab!</title>
      <meta charset="utf-8">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href="/public/assets/collab_theme.css">
    </head>
    <body>
    <div id="${id}">
      {{{${handlebarsID}}}}
    </div>
    <script type="application/javascript" src="/public/${handlebarsID}.js"></script>
    </body>
  </html>
  `

  const hbsTemplate = hbs.compile(html);
  const reactComp = ReactDOM.renderToString(reactElement)
  const templateObj: any = {}
  templateObj[`${handlebarsID}`] = reactComp
  const htmlToSend = hbsTemplate(templateObj);
  return htmlToSend
}