import * as t from 'io-ts'

const MessageType =
  'https://purl.imsglobal.org/spec/lti/claim/message_type' as const
const Version = 'https://purl.imsglobal.org/spec/lti/claim/version' as const
const ResourceLink =
  'https://purl.imsglobal.org/spec/lti/claim/version' as const

const Lti1p3LaunchC = t.type({
  [MessageType]: t.literal('LtiResourceLinkRequest'),
  [Version]: t.literal('1.3.0'),
})

const foo = {
  'https://purl.imsglobal.org/spec/lti/claim/message_type':
    'LtiResourceLinkRequest',
  'https://purl.imsglobal.org/spec/lti/claim/version': '1.3.0',
  'https://purl.imsglobal.org/spec/lti/claim/resource_link': {
    id: '80029813-4058-4818-bd01-fbdf0e3541d7',
    description: '<p>Lti 1.3 Tool Text</p>',
    title: 'Lti 1.3 Tool Title',
    validation_context: null,
    errors: { errors: {} },
  },
  'https://purl.imsglobal.org/spec/lti-ags/claim/endpoint': {
    lineitem: 'http://testsite.canvas.docker/api/lti/courses/2/line_items/9',
    scope: [
      'https://purl.imsglobal.org/spec/lti-ags/scope/lineitem',
      'https://purl.imsglobal.org/spec/lti-ags/scope/result.readonly',
      'https://purl.imsglobal.org/spec/lti-ags/scope/score',
      'https://canvas.instructure.com/lti-ags/progress/scope/show',
    ],
    lineitems: 'http://testsite.canvas.docker/api/lti/courses/2/line_items',
    validation_context: null,
    errors: { errors: {} },
  },
  aud: '10000000000003',
  azp: '10000000000003',
  'https://purl.imsglobal.org/spec/lti/claim/deployment_id':
    '13:b82229c6e10bcb87beb1f1b287faee560ddc3109',
  exp: 1667836519,
  iat: 1667832919,
  iss: 'https://canvas.instructure.com',
  nonce: '65320280-0158-48a2-b28e-74b1a9087775',
  sub: '0e68e596-eade-4f98-8322-36e090df01f2',
  'https://purl.imsglobal.org/spec/lti/claim/target_link_uri':
    'http://lti13testtool.docker/launch?deep_link_location=MydA9LI4y0',
  picture: 'http://canvas.instructure.com/images/messages/avatar-50.png',
  email: 'paul.gray@instructure.com',
  name: 'paul.gray@instructure.com',
  given_name: 'paul.gray@instructure.com',
  family_name: '',
  'https://purl.imsglobal.org/spec/lti/claim/lis': {
    person_sourcedid: null,
    course_offering_sourcedid: null,
    validation_context: null,
    errors: { errors: {} },
  },
  'https://purl.imsglobal.org/spec/lti/claim/context': {
    id: 'f97330a96452fc363a34e0ef6d8d0d3e9e1007d2',
    label: 'TEST',
    title: 'Test Course',
    type: ['http://purl.imsglobal.org/vocab/lis/v2/course#CourseOffering'],
    validation_context: null,
    errors: { errors: {} },
  },
  'https://purl.imsglobal.org/spec/lti/claim/tool_platform': {
    guid: '17P5H0jLBnqKyCQnQxreoDc6pTGinvqalU1sUjUj:canvas-lms',
    name: 'Test Site',
    version: 'cloud',
    product_family_code: 'canvas',
    validation_context: null,
    errors: { errors: {} },
  },
  'https://purl.imsglobal.org/spec/lti/claim/launch_presentation': {
    document_target: 'iframe',
    return_url:
      'http://testsite.canvas.docker/courses/2/external_content/success/external_tool_redirect',
    locale: 'en',
    height: 500,
    width: 500,
    validation_context: null,
    errors: { errors: {} },
  },
  locale: 'en',
  'https://purl.imsglobal.org/spec/lti/claim/roles': [
    'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Administrator',
    'http://purl.imsglobal.org/vocab/lis/v2/system/person#SysAdmin',
    'http://purl.imsglobal.org/vocab/lis/v2/system/person#User',
  ],
  'https://purl.imsglobal.org/spec/lti/claim/custom': {},
  'https://purl.imsglobal.org/spec/lti-nrps/claim/namesroleservice': {
    context_memberships_url:
      'http://testsite.canvas.docker/api/lti/courses/2/names_and_roles',
    service_versions: ['2.0'],
    validation_context: null,
    errors: { errors: {} },
  },
  'https://purl.imsglobal.org/spec/lti/claim/lti11_legacy_user_id':
    '535fa085f22b4655f48cd5a36a9215f64c062838',
  'https://purl.imsglobal.org/spec/lti/claim/lti1p1': {
    resource_link_id: '37463360ccaefd819cd9411fa4908accc1b154a7',
    user_id: '535fa085f22b4655f48cd5a36a9215f64c062838',
    validation_context: null,
    errors: { errors: {} },
  },
  errors: { errors: {} },
  'https://www.instructure.com/placement': null,
}
