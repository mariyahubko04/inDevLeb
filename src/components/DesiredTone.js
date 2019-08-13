import React from 'react';

class DesiredTone extends React.Component {

  render() {
    return (
      <div>
        <h2>
          <span className="main__upload--number">3</span>
          Select you desired tone
        </h2>
        <div className="desired__section">
          <input type="radio" id="casual" name="desired" value="casual" />
          <label for="casual" class="main__label sm"> <i class="fas fa-comment-alt"></i>
            Friendly / Casual</label>

          <input type="radio" id="pro" name="desired" value="pro" />
          <label for="pro" class="main__label sm">
            <i class="fas fa-suitcase"></i>
            Corporete / Pro
          </label>

          <input type="radio" id="media" name="desired" value="media" />
          <label for="media" class="main__label sm">
            <i class="fas fa-microphone"></i>
            Media / Formal
          </label>
        </div>
      </div>
    )
  }
}

export default DesiredTone;
