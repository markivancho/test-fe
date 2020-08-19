import React from 'react'
import { shallow } from 'enzyme'

import Start from '../index'

it('has correct to prop', () => {
  const component = shallow(<Start />)

  expect(component.find('Link').props().to).toEqual('/test-fe/questions')
})
