export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e6bebaef8f3c8c899115c37',
                  title: 'Sanity Studio',
                  name: 'tentacle-cult-studio',
                  apiId: 'e0ce6c68-ee26-4d40-83f0-507ba009a3fe'
                },
                {
                  buildHookId: '5e6bebaee606e0c7de73cd0c',
                  title: 'Blog Website',
                  name: 'tentacle-cult',
                  apiId: 'c79c8483-41a5-4c96-ad62-e546412b63fd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/flaturtha/tentacle-cult',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://tentacle-cult.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
