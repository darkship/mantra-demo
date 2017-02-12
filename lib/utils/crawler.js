import Crawler from 'crawler';
/**
 * customCrawler
 */
class CustomCrawler extends Crawler {
  /**
   * constructor
   */
  constructor(...args) {
    super(args);
  }

  /**
   * _pushToQueue
   */
  _pushToQueue(...args) {
    this.emit('queueItemSize.change', this.queueItemSize, +1);
    super._pushToQueue.apply(this, args);
  }

  /**
   *_release
   */
  _release(...args) {
    this.emit('queueItemSize.change', this.queueItemSize, -1);
    super._release.apply(this, args);
  }
}

export default CustomCrawler;
