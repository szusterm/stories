export interface Story {
    title: string;
    authorId: string;

    startTarget: Target;

    blocks: {
        texts: TextBlock[];
        choices: ChoiceBlock[];
    }
}


export interface TextBlock {
    _id: string;
    title: string;
    content: string;

    target: Target
}

export interface ChoiceBlock {
    _id: string;
    title: string;

    choices: Choice[];
}

export interface Choice {
    name: string;
    target: Target;
}


export interface Target {
    type: string
    targetId: string
}
