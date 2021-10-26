/**
 * OneMinuteLikeWidget widget.
 * This is the result of the tutorial for the one minute like
 */
Blz.defineWidget( 'OneMinuteLikeWidget', {
    /**
     * Optional prefix of the root HTMLElement id.
     */
    prefixId: 'one-minute-like-widget',
    /**
     * This function acts as the constructor of the widget.
     */
    config: function( config ) {
      
    },
    /**
     * This function will be called after this widget is renderer to the DOM.
     * @param {string} id - The id of the widget in the DOM.
     * @param {HTMLElement} div - The root HTMLElement of this widget.
     */
    render: function( id, div ) {
		const e = React.createElement;

		class LikeButton extends React.Component {
		  constructor(props) {
			super(props);
			this.state = { liked: false };
		  }

		  render() {
			if (this.state.liked) {
			  return 'You liked this.';
			}

			return e(
			  'button',
			  { onClick: () => this.setState({ liked: true }) },
			  'Like'
			);
		  }
		}

		const domContainer = document.querySelector('#'+id);
		ReactDOM.render(e(LikeButton), domContainer);      
    },
} )
