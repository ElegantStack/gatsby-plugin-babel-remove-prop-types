exports.onCreateBabelConfig = ({ actions }) => {
	actions.setBabelPlugin({
		name: require.resolve('babel-plugin-transform-react-remove-prop-types'),
	})
}
