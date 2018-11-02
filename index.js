const { dllBuild, build } = require('sokit/webpack');
(async () => {
    try {
        await dllBuild();
        await build();
    } catch (e) {
        console.log(e);
    }
})();
