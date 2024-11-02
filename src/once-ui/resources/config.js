const baseURL = 'http://visualcodespace.com.br/'

// default customization applied to the HTML in the main layout.tsx
const style = {
    theme:       'dark',        // dark | light
    neutral:     'gray',        // sand | gray | slate
    brand:       'cyan',        // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'indigo',      // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',    // color | contrast
    solidStyle:  'flat',        // flat | plastic
    border:      'playful',     // rounded | playful | conservative
    surface:     'translucent', // filled | translucent
    transition:  'all',         // all | micro | macro
    scaling:     '100',         // 90 | 95 | 100 | 105 | 110
}

// default metadata
const meta = {
    title: 'Visual Code Space',
    description: 'Visual Code Space official website.'
}


// default open graph data
const og = {
    title: 'Visual Code Space',
    description: meta.description,
    type: 'website'
}

// default schema data
const schema = {
    logo: '',
    type: 'Organization',
    name: meta.name,
    description: meta.description,
    email: 'contact@visualcodespace.com.br'
}

// social links
const social = {
    telegram: 'https://t.me/visualcodespace'
}

export { baseURL, style, meta, og, schema, social };
