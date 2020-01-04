import {BlockType, IStory} from '../../../shared/story-types';

const story: IStory = {
  _id: '365753',
  authorId: '123',
  title: 'My first story',

  startTarget: {
    type: BlockType.TEXT,
    targetId: '2324'
  },

  blocks: {
    texts: [
      {
        _id: '2324',
        title: 'Block',
        content: 'oewgneornge erogn',
        target: {
          type: BlockType.TEXT,
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
            _id: '236456',
            name: 'Go left',
            target: {
              type: BlockType.TEXT,
              targetId: '11'
            }
          },
          {
            _id: '945674',
            name: 'Go right',
            target: {
              type: BlockType.TEXT,
              targetId: '11'
            }
          }
        ]
      }
    ]
  }
};

export default story;
