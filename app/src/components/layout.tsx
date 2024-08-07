export default function Layout({
    children,
    title
}: {
    title: string
    children: JSX.Element
}){
    return <html style="height: 100%" lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>

      <link rel="stylesheet" type="text/css" href="/public/css/globals.css"/>
      <script defer src="https://unpkg.com/htmx.org@2.0.0" integrity="sha384-wS5l5IKJBvK6sPTKa2WZ1js3d947pvWXbPJ1OmWfEuxLgeHcEbjUUA5i9V5ZkpCw" crossorigin="anonymous"></script>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://unpkg.com/hyperscript.org@0.9.12"></script>
    </head>
    <body class="w-full h-full">
        {children}
    </body>
  </html>
}