import { Component } from 'react';
import { ViewPropTypes, createElement } from 'react-native';
import { PropTypes } from 'prop-types';
import DRMType from '../DRMType';
type NormalProps = {
  /* Native only */
  adTagUrl: ?string,
  streamType: ?string,
  source: Object,
  seek?: ?number,
  fullscreen?: ?boolean,
  controls?: ?boolean,
  onVideoLoadStart?: ?Function,
  onVideoLoad?: ?Function, 
  onVideoBuffer?: ?Function,
  onVideoError?: ?Function,
  onVideoProgress?: ?Function,
  onVideoSeek?: ?Function,
  onVideoEnd?: ?Function,
  onTimedMetadata?: ?Function,
  onVideoFullscreenPlayerWillPresent?: ?Function,
  onVideoFullscreenPlayerDidPresent?: ?Function,
  onVideoFullscreenPlayerWillDismiss?: ?Function,
  onVideoFullscreenPlayerDidDismiss?: ?Function,
  onLoadStart?: ?Function,
  onLoad?: ?Function,
  onBuffer: ?Function,
  onError: ?Function,
  onProgress: ?Function,
  onSeek: ?Function,
  onEnd: ?Function,
  width?: ?number,
  heigth?: ?number,
  style: ?PropTypes.StyleSheet,


  // resizeMode: PropTypes.string,
  // poster: PropTypes.string,
  // repeat: PropTypes.bool,
  // paused: PropTypes.bool,
  // muted: PropTypes.bool,
  // volume: PropTypes.number,
  // rate: PropTypes.number,
  // playInBackground: PropTypes.bool,
  // playWhenInactive: PropTypes.bool,
  // ignoreSilentSwitch: PropTypes.oneOf(['ignore', 'obey']),
  // disableFocus: PropTypes.bool,
  // controls: PropTypes.bool,
  // currentTime: PropTypes.number,
  // progressUpdateInterval: PropTypes.number,
  // onFullscreenPlayerWillPresent: PropTypes.func,
  // onFullscreenPlayerDidPresent: PropTypes.func,
  // onFullscreenPlayerWillDismiss: PropTypes.func,
  // onFullscreenPlayerDidDismiss: PropTypes.func,
  // onReadyForDisplay: PropTypes.func,
  // onPlaybackStalled: PropTypes.func,
  // onPlaybackResume: PropTypes.func,
  // onPlaybackRateChange: PropTypes.func,
  // onAudioFocusChanged: PropTypes.func,
  // onAudioBecomingNoisy: PropTypes.func,
};

/* $FlowFixMe - the renderItem passed in from SectionList is optional there but
 * required here */
type Props = NormalProps;

class Video extends Component<Props> {
  constructor(props) {
    super(props);
  }

  setNativeProps(props: Object) {
    if (this._videoRef) {
      this._videoRef.setNativeProps(props);
    }
  }

  _assignRoot = (component) => {
    this._root = component;
  };

  _onLoadStart = (event) => {
    if (this.props.onLoadStart) {
      this.props.onLoadStart(event.nativeEvent);
    }
  };

  _onLoad = (event) => {
    if (this.props.onLoad) {
      this.props.onLoad(event.nativeEvent);
    }
  };
 
  _onError = (event) => {
    if (this.props.onError) {
      this.props.onError(event.nativeEvent);
    }
  };

  _onProgress = (event) => {
    if (this.props.onProgress) {
      this.props.onProgress(event.nativeEvent);
    }
  };

  _onSeek = (event) => {
    if (this.props.onSeek) {
      this.props.onSeek(event.nativeEvent);
    }
  };

  _onEnd = (event) => {
    if (this.props.onEnd) {
      this.props.onEnd(event.nativeEvent);
    }
  };

  _onTimedMetadata = (event) => {
    if (this.props.onTimedMetadata) {
      this.props.onTimedMetadata(event.nativeEvent);
    }
  };

  _onFullscreenPlayerWillPresent = (event) => {
    if (this.props.onFullscreenPlayerWillPresent) {
      this.props.onFullscreenPlayerWillPresent(event.nativeEvent);
    }
  };

  _onFullscreenPlayerDidPresent = (event) => {
    if (this.props.onFullscreenPlayerDidPresent) {
      this.props.onFullscreenPlayerDidPresent(event.nativeEvent);
    }
  };

  _onFullscreenPlayerWillDismiss = (event) => {
    if (this.props.onFullscreenPlayerWillDismiss) {
      this.props.onFullscreenPlayerWillDismiss(event.nativeEvent);
    }
  };

  _onFullscreenPlayerDidDismiss = (event) => {
    if (this.props.onFullscreenPlayerDidDismiss) {
      this.props.onFullscreenPlayerDidDismiss(event.nativeEvent);
    }
  };

  _onReadyForDisplay = (event) => {
    if (this.props.onReadyForDisplay) {
      this.props.onReadyForDisplay(event.nativeEvent);
    }
  };

  _onPlaybackStalled = (event) => {
    if (this.props.onPlaybackStalled) {
      this.props.onPlaybackStalled(event.nativeEvent);
    }
  };

  _onPlaybackResume = (event) => {
    if (this.props.onPlaybackResume) {
      this.props.onPlaybackResume(event.nativeEvent);
    }
  };

  _onPlaybackRateChange = (event) => {
    if (this.state.showPoster && (event.nativeEvent.playbackRate !== 0)) {
      this.setState({ showPoster: false });
    }

    if (this.props.onPlaybackRateChange) {
      this.props.onPlaybackRateChange(event.nativeEvent);
    }
  };

  _onAudioBecomingNoisy = () => {
    if (this.props.onAudioBecomingNoisy) {
      this.props.onAudioBecomingNoisy();
    }
  };

  _onAudioFocusChanged = (event) => {
    if (this.props.onAudioFocusChanged) {
      this.props.onAudioFocusChanged(event.nativeEvent);
    }
  };

  _onBuffer = (event) => {
    if (this.props.onBuffer) {
      this.props.onBuffer(event.nativeEvent);
    }
  };

  _captureRef = ref => {
    /* $FlowFixMe(>=0.53.0 site=react_native_fb,react_native_oss) This comment
     * suppresses an error when upgrading Flow's support for React. To see the
     * error delete this comment and run Flow. */
    this._videoRef = ref;
  };
 
  _channelup = () => {
    if (this.props.channelup) {
      this.props.channelup(1, "left");
    }
  };   
  _channeldown = () => {
    if (this.props.channelup) {
      this.props.channeldown(-1, "left");
    }
  };
  _playerdown = () => {
    if (this.props.playerdown) {
      this.props.playerdown();
    }
  };
  _playerback = () => {
    if (this.props.playerback) {
      this.props.playerback();
    }
  };
  _playerup = () => {
    if (this.props.playerup) {
      this.props.playerup();
    }
  };

  render() {
    const {
      source,
      volume,
      controls,
      style,
      
    } = this.props;

    this.imgup = createElement('img', {
      id:"imgup",
      src:require('../assets/outline-arrow_back-white-48/2x/outline_arrow_back_white_48dp.png'),
      style: {
        width:"30px",
        height:"30px", 
        position:"absolute",
        top:"0",
        bottom:"0",
        left:"0",
        zIndex:"9999",
        margin:"auto",
        backgroundColor:"rgba(0, 0, 0, 0.01)"
      }
    });
    this.imgdown = createElement('img', {
      id:"imgdown",
      src:require('../assets/outline-arrow_forward-white-48/2x/outline_arrow_forward_white_48dp.png'),
      style: {
        width:"30px",
        height:"30px",
        position:"absolute",
        top:"0",
        bottom:"0",
        right:"0",
        zIndex:"9999",
        margin:"auto",
        backgroundColor:"rgba(0, 0, 0, 0.01)"
      }
    });
    this.channelUp = createElement('div', {
      id:"channelup",
      onClick:this._channelup,
      style: {
        width:"30px",
        height:"100%",
        position:"absolute",
        top:"0",
        left:"0",
        zIndex:"9999",
        display: "inline-block",
        verticalAlign: "middle",
        backgroundColor:"rgba(0, 0, 0, 0.01)"
      }
    }, this.imgup);

    this.channelDown = createElement('div', {
      id:"channeldown",
      onClick:this._channeldown,
      style: {
        width:"30px",
        height:"100%",
        position:"absolute",
        top:"0",
        right:"0",
        zIndex:"9999", 
        display: "inline-block",
        verticalAlign: "middle",
        backgroundColor:"rgba(0, 0, 0, 0.01)"
      }
    }, this.imgdown);
    this.playerup = createElement('div', {
      id:"playerup",
      onMouseOver:this._playerup,
      onClick:this._playerup,
      style: {
        width:"100%",
        height:"20px",
        position:"absolute",
        top:"0",
        zIndex:"9999",
        backgroundColor:"rgba(0, 0, 0, 0.01)"
      }
    });
    this.playerdown = createElement('div', {
      id:"playerdown",
      onMouseOver:this._playerdown,
      onClick:this._playerdown,
      style: {
        width:"100%",
        height:"20px",
        position:"absolute",
        bottom:"0",
        zIndex:"9999",
        backgroundColor:"rgba(0, 0, 0, 0.01)"
      }
    });
    this.playerback = createElement('div', {
      id:"playeback",
      onClick:this._playerback,
    });
    this.videoElement = createElement('video', {
      id:source.ref,
      //autoPlay:true,
      //src: source.uri || source,
      onLoadStart: this._onLoadStart,
      onLoadedData: this._onLoad,
      onLoad: initVideoJS(source.uri, source.type, source.drmUrl, source.drmKeyServerUrl, source.ref, this.props.adTagUrl, this.props.streamType),
      onError: this._onError,
      onProgress: this._onProgress,
      onSeeking: this._onSeek,
      onEnded: this._onEnd,
      onLoadedMetadata: this._onTimedMetadata,
      onCanPlay: this._onReadyForDisplay,
      onStalled: this._onPlaybackStalled,
      controls:"controls",
      style: {
          display: "block",
          position: "relative",
      },
    });
    if(source.full == false){
      this.grouped = createElement('div', {
        id:"grouped",
        style:{
          height: "100%"
        }
      },this.playerdown, this.playerup, this.playerback, this.videoElement);
    }else{
      this.grouped = createElement('div', {
        id:"grouped",
        style:{
          height: "100%"
        }
      },this.channelUp,this.channelDown, this.playerdown, this.playerup, this.playerback, this.videoElement);
     
    
    }

    return this.grouped;

  }
}

Video.propTypes = {
  /* Native only */
  seek: PropTypes.number,
  fullscreen: PropTypes.bool,
  onVideoLoadStart: PropTypes.func,
  onVideoLoad: PropTypes.func,
  onVideoBuffer: PropTypes.func,
  onVideoError: PropTypes.func,
  onVideoProgress: PropTypes.func,
  onVideoSeek: PropTypes.func,
  onVideoEnd: PropTypes.func,
  onTimedMetadata: PropTypes.func,
  onVideoFullscreenPlayerWillPresent: PropTypes.func,
  onVideoFullscreenPlayerDidPresent: PropTypes.func,
  onVideoFullscreenPlayerWillDismiss: PropTypes.func,
  onVideoFullscreenPlayerDidDismiss: PropTypes.func,
  style: PropTypes.StyleSheet,

  /* Wrapper component */
  channelup: PropTypes.func,
  channeldown: PropTypes.func,
  playerup: PropTypes.func,
  playerdown: PropTypes.func,
  playerback: PropTypes.func,
  adTagUrl: PropTypes.string,
  streamType: PropTypes.string,
  // source: PropTypes.oneOfType([
  //   PropTypes.shape({
  //     uri: PropTypes.string,
  //     type: PropTypes.string,
  //     drmUrl: PropTypes.string,
  //     drmServerUrl: PropTypes.string,
  //     ref: PropTypes.string,
  //     drm: source.drm
  //   }),
  //   PropTypes.number,
  // ]),
  source: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string,
      type: PropTypes.string,
      drmUrl: PropTypes.string,
      drmServerUrl: PropTypes.string,
      ref: PropTypes.string,
      drm: PropTypes.shape({
        type: PropTypes.oneOf([
          DRMType.CLEARKEY, DRMType.FAIRPLAY, DRMType.WIDEVINE, DRMType.PLAYREADY
        ]),
        licenseServer: PropTypes.string,
        headers: PropTypes.shape({})
      })
    }),
    // Opaque type returned by require('./video.mp4')
    PropTypes.number,
  ]),
  resizeMode: PropTypes.string,
  poster: PropTypes.string,
  repeat: PropTypes.bool,
  paused: PropTypes.bool,
  muted: PropTypes.bool,
  volume: PropTypes.number,
  rate: PropTypes.number,
  playInBackground: PropTypes.bool,
  playWhenInactive: PropTypes.bool,
  ignoreSilentSwitch: PropTypes.oneOf(['ignore', 'obey']),
  disableFocus: PropTypes.bool,
  controls: PropTypes.bool,
  currentTime: PropTypes.number,
  progressUpdateInterval: PropTypes.number,
  onLoadStart: PropTypes.func,
  onLoad: PropTypes.func,
  onBuffer: PropTypes.func,
  onError: PropTypes.func,
  onProgress: PropTypes.func,
  onSeek: PropTypes.func,
  onEnd: PropTypes.func,
  onFullscreenPlayerWillPresent: PropTypes.func,
  onFullscreenPlayerDidPresent: PropTypes.func,
  onFullscreenPlayerWillDismiss: PropTypes.func,
  onFullscreenPlayerDidDismiss: PropTypes.func,
  onReadyForDisplay: PropTypes.func,
  onPlaybackStalled: PropTypes.func,
  onPlaybackResume: PropTypes.func,
  onPlaybackRateChange: PropTypes.func,
  onAudioFocusChanged: PropTypes.func,
  onAudioBecomingNoisy: PropTypes.func,

  /* Required by react-native */
  scaleX: PropTypes.number,
  scaleY: PropTypes.number,
  translateX: PropTypes.number,
  translateY: PropTypes.number,
  rotation: PropTypes.number,
  ...ViewPropTypes,
};

export default Video;