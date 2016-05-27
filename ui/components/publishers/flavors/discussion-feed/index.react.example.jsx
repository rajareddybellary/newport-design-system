/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Button from 'ui/components/buttons/index.react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import MediaObject from 'ui/utilities/media-objects/index.react';
import className from 'classnames';
import { Attachments } from 'ui/components/feeds/flavors/comment/index.react.example';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className={pf('demo-only')} {...props}>
    {props.children}
  </div>;

const image = (
  <div className={pf('avatar avatar--circle avatar--small')}>
    <a href="javascript:void(0);" title="Jenna Davis">
      <img src="/assets/images/avatar2.jpg" alt="Jenna Davis" />
    </a>
  </div>
);

let Publisher = props =>
  <div className={className(pf('publisher publisher--discussion'), props.className)}>
    <dl className={pf('list--horizontal m-bottom--small publisher__toggle-visibility')}>
      <dt className={pf('list__item text-body--small')}>To: </dt>
      <dd className={pf('list__item')}>My Followers</dd>
    </dl>
    <label htmlFor="comment-text-input2" className={pf('assistive-text')}>Write a comment</label>
    <textarea id="comment-text-input2" className={pf('publisher__input textarea text-longform')} placeholder="Write a comment&hellip;" />
    {props.children}
  </div>;

let PublisherActions = props =>
  <div className={pf('publisher__actions grid grid--align-spread')}>
    <ul className={pf('grid publisher__toggle-visibility')}>
      <li>
        <ButtonIcon
          flavor="icon-container"
          sprite="utility"
          symbol="adduser"
          assistiveText="Add User" />
      </li>
      <li>
        <ButtonIcon
          flavor="icon-container"
          sprite="utility"
          symbol="attach"
          assistiveText="Attach a file" />
      </li>
    </ul>
    <Button flavor="brand">Share</Button>
  </div>;

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let Default = props =>
  <Demo>
    <Publisher>
      <PublisherActions />
    </Publisher>
  </Demo>;

let Active = props =>
  <Demo>
    <Publisher className={pf('is-active')}>
      <PublisherActions />
    </Publisher>
  </Demo>;

let Attachment = props =>
  <Demo>
    <Publisher className={pf('is-active')}>
      <Attachments />
      <PublisherActions />
    </Publisher>
  </Demo>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'publisher-feed-default',
    label: 'Default',
    element: <Default />
  },
  {
    id: 'publisher-feed-active',
    label: 'Active',
    element: <Active />
  },
  {
    id: 'publisher-feed-with-attachment',
    label: 'With attachment(s)',
    element: <Attachment />
  }
];
