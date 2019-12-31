export interface IStory {
    title: string;
    authorId: string;

    startTarget: ITarget;

    blocks: {
        texts: ITextBlock[];
        choices: IChoiceBlock[];
    };
}


export interface ITextBlock {
    _id: string;
    title: string;
    content: string;

    target: ITarget;
}

export interface IChoiceBlock {
    _id: string;
    title: string;

    choices: IChoice[];
}

export interface IChoice {
    name: string;
    target: ITarget;
}


export interface ITarget {
    type: BlockType;
    targetId: string;
}

export type BlockType = 'text' | 'choice';
