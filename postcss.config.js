module.exports = {
    plugins: [
    require( 'postcss-nested' )( { /* ...options */ } ),
    require( 'postcss-export-vars' )( {
        file: 'varOutput',
        type: 'json',
        match: ['-margin']
    } ),
    require( 'precss' )( { /* ...options */ } ),
    require( 'postcss-cssnext' )( { /* ...options */ } ),
    require( 'csswring' )( { /* ...options */ } )
  ]
}
