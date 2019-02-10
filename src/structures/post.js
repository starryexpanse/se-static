import React from 'react';
import { deserialize, serialize } from 'react-serialize';

class Post {
    constructor({ date, title, authors, body }) {
        this.date = date;
        this.title = title;
        this.authors = authors;
        this.body = body;
        console.log('post.body(2) = ', this.body);
        this.id = `${title.toLowerCase().split(' ').join('-')}`;
    }

    serialized() {
        return new Post({
            ...this,
            body: serialize(this.body),
        });
    }

    deserialized() {
        return new Post({
            ...this,
            body: deserialize(this.body),
        });
    }
}

export { Post };