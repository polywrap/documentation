/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState, useRef } from "react";
import DocPaginator from '@theme/DocPaginator';
import DocVersionSuggestions from '@theme/DocVersionSuggestions';
import Seo from '@theme/Seo';
import LastUpdated from '@theme/LastUpdated';
import TOC from '@theme/TOC';
import EditThisPage from '@theme/EditThisPage';
import clsx from 'clsx';
import styles from './styles.module.css';
import {
  useActivePlugin,
  useVersions,
  useActiveVersion,
} from '@theme/hooks/useDocs';
import FeedbackWidget from '../../components/FeedbackWidget/index';
import { InView } from 'react-intersection-observer';
import { Fade } from '@mui/material';

function DocItem(props) {
  const {content: DocContent} = props;
  const {
    metadata,
    frontMatter: {
      image,
      keywords,
      hide_title: hideTitle,
      hide_table_of_contents: hideTableOfContents,
    },
  } = DocContent;
  const {
    description,
    title,
    editUrl,
    lastUpdatedAt,
    formattedLastUpdatedAt,
    lastUpdatedBy,
    unversionedId,
  } = metadata;
  const {pluginId} = useActivePlugin({
    failfast: true,
  });
  const versions = useVersions(pluginId);
  const version = useActiveVersion(pluginId); // If site is not versioned or only one version is included
  // we don't show the version badge
  // See https://github.com/facebook/docusaurus/issues/3362

  const showVersionBadge = versions.length > 1;
  const [haveVoted,setHaveVoted] = useState(false)
  const [stopShowingVote,setStopShowingVote] = useState(false)
  const [visible,setVisible] = useState(false)
  return (
    <>
      <Seo
        {...{
          title,
          description,
          keywords,
          image,
        }}
      />

      <div className="row">
        <div
          className={clsx('col', {
            [styles.docItemCol]: !hideTableOfContents,
          })}>
          <DocVersionSuggestions />
          <div className={styles.docItemContainer}>
            <article>
              {showVersionBadge && (
                <div>
                  <span className="badge badge--secondary">
                    Version: {version.label}
                  </span>
                </div>
              )}
              {!hideTitle && (
                <header>
                  <h1 className={styles.docTitle}>{title}</h1>
                </header>
              )}
              <div className="markdown">
                <DocContent />
              </div>
            </article>
            <div className="margin-vert--lg">
              <DocPaginator metadata={metadata} />
            </div>
            <div className="margin-vert--md">
            <InView onChange={(onView) => {
              if(!onView && haveVoted) {
                setStopShowingVote(true)
              }
            }}>
              {({ inView, ref, entry }) => (
               <Fade timeout={3000} in={inView && !stopShowingVote}>
                 <div ref={ref}>
                 <FeedbackWidget changeHaveVoted={(voted)=> setHaveVoted(voted)} haveVoted={haveVoted} label={unversionedId} />
                  </div>
                </Fade>
              )}
            </InView>
              {(editUrl || lastUpdatedAt || lastUpdatedBy) && (
              <div className="row">
                <div className="col">
                  {editUrl && <EditThisPage editUrl={editUrl} />}
                </div>
                {(lastUpdatedAt || lastUpdatedBy) && (
                  <LastUpdated
                    lastUpdatedAt={lastUpdatedAt}
                    formattedLastUpdatedAt={formattedLastUpdatedAt}
                    lastUpdatedBy={lastUpdatedBy}
                  />
                )}
              </div>
              )}
            </div>
          </div>
        </div>
        {!hideTableOfContents && DocContent.toc && (
          <div className="col col--3">
            <TOC toc={DocContent.toc} />
          </div>
        )}
      </div>
    </>
  );
}

export default DocItem;
