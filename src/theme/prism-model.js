Prism.languages.model = {
    'comment': {
		pattern: /#.*/,
	},
	'function': /\b\w+(?=\()/,
    'keyword': /\b(?:request_definition|policy_definition|role_definition|policy_effect|matchers)\b/,
};