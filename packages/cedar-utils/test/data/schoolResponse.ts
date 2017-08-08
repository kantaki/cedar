const response = [
  {
    objectIdFieldName: 'FID',
    globalIdFieldName: '',
    geometryType: 'esriGeometryPoint',
    spatialReference: {
      wkid: 102100,
      latestWkid: 3857
    },
    fields: [
      {
        name: 'Jordan_SUM',
        type: 'esriFieldTypeDouble',
        alias: 'Jordan_SUM',
        sqlType: 'sqlTypeFloat',
        domain: null,
        defaultValue: null
      },
      {
        name: 'Type',
        type: 'esriFieldTypeString',
        alias: 'Type',
        sqlType: 'sqlTypeNVarchar',
        length: 254,
        domain: null,
        defaultValue: null
      }
    ],
    features: [
      {
        attributes: {
          Jordan_SUM: 13,
          Type: 'High School'
        }
      },
      {
        attributes: {
          Jordan_SUM: 6,
          Type: 'Middle School'
        }
      },
      {
        attributes: {
          Jordan_SUM: 1,
          Type: 'Elementary School'
        }
      }
    ]
  },
  {
    objectIdFieldName: 'FID',
    globalIdFieldName: '',
    geometryType: 'esriGeometryPoint',
    spatialReference: {
      wkid: 102100,
      latestWkid: 3857
    },
    fields: [
      {
        name: 'Fayetteville_SUM',
        type: 'esriFieldTypeDouble',
        alias: 'Fayetteville_SUM',
        sqlType: 'sqlTypeFloat',
        domain: null,
        defaultValue: null
      },
      {
        name: 'Type',
        type: 'esriFieldTypeString',
        alias: 'Type',
        sqlType: 'sqlTypeNVarchar',
        length: 254,
        domain: null,
        defaultValue: null
      }
    ],
    features: [
      {
        attributes: {
          Fayetteville_SUM: 1,
          Type: 'Elementary School'
        }
      }
    ]
  },
  {
    objectIdFieldName: 'FID',
    globalIdFieldName: '',
    geometryType: 'esriGeometryPoint',
    spatialReference: {
      wkid: 102100,
      latestWkid: 3857
    },
    fields: [
      {
        name: 'Dewitt_SUM',
        type: 'esriFieldTypeDouble',
        alias: 'Dewitt_SUM',
        sqlType: 'sqlTypeFloat',
        domain: null,
        defaultValue: null
      },
      {
        name: 'Type',
        type: 'esriFieldTypeString',
        alias: 'Type',
        sqlType: 'sqlTypeNVarchar',
        length: 254,
        domain: null,
        defaultValue: null
      }
    ],
    features: [
      {
        attributes: {
          Dewitt_SUM: 8,
          Type: 'High School'
        }
      },
      {
        attributes: {
          Dewitt_SUM: 1,
          Type: 'Elementary School'
        }
      },
      {
        attributes: {
          Dewitt_SUM: 0,
          Type: 'Middle School'
        }
      }
    ]
  }
]

export default response
