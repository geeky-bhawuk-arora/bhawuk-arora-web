const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

class BookmarkAPI {
  async getCategories() {
    const response = await fetch(`${API_BASE_URL}/api/categories`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return response.json();
  }

  async createCategory(category) {
    const response = await fetch(`${API_BASE_URL}/api/categories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(category)
    });
    if (!response.ok) throw new Error('Failed to create category');
    return response.json();
  }

  async getBookmarks(filters = {}) {
    const params = new URLSearchParams();
    if (filters.category_id) params.append('category_id', filters.category_id);
    if (filters.tag) params.append('tag', filters.tag);
    if (filters.search) params.append('search', filters.search);
    if (filters.favorites_only) params.append('favorites_only', 'true');

    const response = await fetch(`${API_BASE_URL}/api/bookmarks?${params}`);
    if (!response.ok) throw new Error('Failed to fetch bookmarks');
    return response.json();
  }

  async createBookmark(bookmark) {
    const response = await fetch(`${API_BASE_URL}/api/bookmarks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookmark)
    });
    if (!response.ok) throw new Error('Failed to create bookmark');
    return response.json();
  }

  async updateBookmark(id, bookmark) {
    const response = await fetch(`${API_BASE_URL}/api/bookmarks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookmark)
    });
    if (!response.ok) throw new Error('Failed to update bookmark');
    return response.json();
  }

  async deleteBookmark(id) {
    const response = await fetch(`${API_BASE_URL}/api/bookmarks/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to delete bookmark');
    return response.json();
  }

  async recordVisit(id) {
    const response = await fetch(`${API_BASE_URL}/api/bookmarks/${id}/visit`, {
      method: 'POST'
    });
    if (!response.ok) throw new Error('Failed to record visit');
    return response.json();
  }

  async getStats() {
    const response = await fetch(`${API_BASE_URL}/api/stats`);
    if (!response.ok) throw new Error('Failed to fetch stats');
    return response.json();
  }

  async getTags() {
    const response = await fetch(`${API_BASE_URL}/api/tags`);
    if (!response.ok) throw new Error('Failed to fetch tags');
    return response.json();
  }
}

export default new BookmarkAPI();