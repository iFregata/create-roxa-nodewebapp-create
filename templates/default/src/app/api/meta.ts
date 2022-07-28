const meta = {
  id: '{{upper (uuid)}}',
  name: '{{capital name}} Web API',
  description: '{{description}}',
  version: 'v1',
  port: 8181,
  context_root: '/{{name}}',
  api_specs: {
    get_book_list: {
      title: 'Gets a list of books',
      uri: '/books',
    },
    get_book: {
      title: 'Gets one of book by ID',
      uri: '/books/:book_id',
    },
    post_book: {
      title: 'Registers a new book',
      uri: '/books',
    },
    put_book: {
      title: 'Updates a book by ID',
      uri: '/books/:book_id',
    },
    delete_book: {
      title: 'Deletes a book by ID',
      uri: '/books/:book_id',
    },
  },
};
export default meta;
