import {IMongoBase} from './mongo-types';

export interface IStory extends IMongoBase {
    title: string;
    authorId: string;

    startTarget: ITarget;

    blocks: {
        texts: ITextBlock[];
        choices: IChoiceBlock[];
    };
}


export interface ITextBlock extends IMongoBase {
    title: string;
    content: string;

    target: ITarget;
}

export interface IChoiceBlock extends IMongoBase {
    title: string;

    choices: IChoice[];
}

export interface IChoice extends IMongoBase {
    name: string;
    target: ITarget;
}


export interface ITarget {
    type: BlockType;
    targetId: string;
}

export type BlockType = 'text' | 'choice';
