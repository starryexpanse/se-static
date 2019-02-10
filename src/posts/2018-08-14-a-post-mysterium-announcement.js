import React from 'react'
import { Post } from '../structures/post';

export default new Post({
    date: '2018-08-14',
    title: 'A Post-Mysterium Announcement',
    authors: ['nick'],
    body: (
        <div>
            <p>
                It’s been a whirlwind few weeks for the team and we have a lot to share with you. Last weekend we were proud to attend the annual convention of all things Myst, Mysterium, in beautiful St. Louis Missouri, and what a weekend it was. While those who attended catch up on their sleep and recover, we’d like to share some news with those of you who couldn’t make it.
            </p>

            <p>
                Recordings of the full presentation will be available soon.
            </p>

            <p>
                That’s right! We’re very excited to finally announce that we are officially developing realRiven for virtual reality. Those of you who’ve been following the project for a while and know our previous stance on VR (best summarised by a casual “VR is cool, but it’s too much work”) may have questions as to what’s changed. Simply, the tools for developing a game in VR have become more ubiquitous and easy to use, and our team now has several members with experience in shipping titles for VR. We have the talent and the technical barriers are no longer an issue, so we’re pleased to make this announcement and we hope you’re as excited as we are.
            </p>

            <p>
                If you have any questions about our decision to support VR (or anything else, for that matter) feel free to drop by and ask us in our official project Discord server.
            </p>

            <p>
                Please welcome our new team members!<br />
                Amit Arnon, Programmer<br />
                Jan Goris, 3D Artist
            </p>
        </div>
    ),
});