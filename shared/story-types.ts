import {IMongoBase} from './mongo-types';

export interface IStory extends IMongoBase {
    title: string;
    authorId: string;

    startTarget?: ITarget;

    blocks: {
        texts: ITextBlock[];
        choices: IChoiceBlock[];
    };
}


export interface IBlock extends IMongoBase {}

export interface ITextBlock extends IBlock {
    content: string;
    target?: ITarget;
}

export interface IChoiceBlock extends IBlock {
    choices: IChoice[];
}

export interface IChoice extends IMongoBase {
    name: string;
    target?: ITarget;
}


export interface ITarget {
    type: BlockType;
    targetId: string;
}

export enum BlockType {
    TEXT = 'TEXT',
    CHOICE = 'CHOICE'
}
