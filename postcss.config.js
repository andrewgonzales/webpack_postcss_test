module.exports = {
    plugins: [
    require( 'postcss-smart-import' )( { /* ...options */ } ),
    require( 'postcss-export-vars' )( {
        file: 'varOutput',
        type: 'json',
        match: ['-margin']
    } ),
    require( 'postcss-cssnext' )( { /* ...options */ } )
  ]
}
