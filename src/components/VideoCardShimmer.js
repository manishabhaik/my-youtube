import React from 'react'

const VideoCardShimmer = () => {
  return (
    <div class="container">
      <div class="video-row">
        <div class="video-row-title bg-gray my-4 ml-1"></div>
        <div class="d-flex pb-5 border-bottom">
          <div class="col px-1">
            <div class="video">
              <div class="video-thumbnail bg-gray"></div>
              <div class="video-title bg-gray my-2"></div>
              <div class="video-meta bg-gray my-2 w-75"></div>
            </div>
          </div>
          <div class="col px-1">
            <div class="video">
              <div class="video-thumbnail bg-gray"></div>
              <div class="video-title bg-gray my-2"></div>
              <div class="video-meta bg-gray my-2 w-75"></div>
            </div>
          </div>
          <div class="col px-1 d-none d-sm-block">
            <div class="video">
              <div class="video-thumbnail bg-gray"></div>
              <div class="video-title bg-gray my-2"></div>
              <div class="video-meta bg-gray my-2 w-75"></div>
            </div>
          </div>
          <div class="col px-1 d-none d-md-block">
            <div class="video">
              <div class="video-thumbnail bg-gray"></div>
              <div class="video-title bg-gray my-2"></div>
              <div class="video-meta bg-gray my-2 w-75"></div>
            </div>
          </div>
          <div class="col px-1 d-none d-lg-block">
            <div class="video">
              <div class="video-thumbnail bg-gray"></div>
              <div class="video-title bg-gray my-2"></div>
              <div class="video-meta bg-gray my-2 w-75"></div>
            </div>
          </div>
          <div class="col px-1 d-none d-xl-block">
            <div class="video">
              <div class="video-thumbnail bg-gray"></div>
              <div class="video-title bg-gray my-2"></div>
              <div class="video-meta bg-gray my-2 w-75"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCardShimmer
