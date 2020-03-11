module.exports = {
  name: 'hero-list',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/hero-list',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
