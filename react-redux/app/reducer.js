import immutable from 'immutable';
function reducer(state = immutable.fromJS({
  text: '你好，访问者',
  name: '访问者',
  color:"yellow"
}), action) {
  switch (action.type) {
    case 'change':
      var state = state.set("text","你好,"+action.payload),
          state = state.set("name",action.payload);
      return state;
    case "colors":
      return state.set("color",action.color);
    default:
      return state;
  }
}

export default reducer;
