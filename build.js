// TODO: require node 16+

// Ref: https://www.npmjs.com/package/commander
const program = require('commander'),
    fs = require('fs')

const parsedArgs = program.parseOptions(process.argv),
    outDir = './dist',
    htmlTemplate = './src/lib/agency/controls/page/template.html',
    interpolate = Symbol('interpolate')

String.prototype[interpolate] = function (params) {
    const keys = Object.keys(params);
    const values = Object.values(params);
    return new Function(...keys, `return \`${this}\`;`)(...values);
}

function createHtml() {
    try {
        const data = fs.readFileSync(htmlTemplate, 'utf-8')
        return data[interpolate]({
            lang: 'en-US',
            title: 'Hello World'
        })
    } catch (e) {
        console.error(e)
    }
}

function build() {
    if (!fs.existsSync(outDir))
        fs.mkdirSync(outDir)
    fs.writeFileSync(`${outDir}/index.html`, createHtml())
}