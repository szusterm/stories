import {IStory} from '../../../shared/storyTypes';

const story: IStory = {
  authorId: '123',
  title: 'My first story',

  startTarget: {
    type: 'text',
    targetId: '234'
  },

  blocks: {
    texts: [
      {
        _id: '2324',
        title: 'Block',
        content: 'oewgneornge erogn',
        target: {
          type: 'text',
          targetId: '234234'
        }
      }
    ],

    choices: [
      {
        _id: '01',
        title: 'My choice',
        choices: [
          {
            name: 'Go left',
            target: {
              type: 'text',
              targetId: '11'
            }
          },
          {
            name: 'Go right',
            target: {
              type: 'text',
              targetId: '11'
            }
          }
        ]
      }
    ]
  }
};

export default story;
