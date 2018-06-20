import React from 'react';

const FamilyList = (props) => {
  let { singleFamilies, onDeleteFamily } = props;
  console.log('singleFamilies', singleFamilies);
  return (
    <div>
      {singleFamilies.length === 0 ? (
        <div></div>
      ) : (
        <div>
          {singleFamilies.map((family, index) => (
            <div key={index}>
              <div>
                <p>Family Name: { family.lastName }</p>
                <p>Parent Name: { family.parent }</p>
                <p>Children: { family.children }</p>
              </div>
              <button onClick={() => onDeleteFamily(family)} className='contact-remove'>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FamilyList;
