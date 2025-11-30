// src/hooks/useAdminStore.js
import { useState, useCallback } from 'react';
import bookmarkAPI from '../services/bookmarkApi';

export const useAdminStore = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarks, setBookmarks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [stats, setStats] = useState({
    total_bookmarks: 0,
    total_categories: 0,
    favorites: 0
  });
  const [showAddModal, setShowAddModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [bookmarksData, categoriesData, statsData] = await Promise.all([
        bookmarkAPI.getBookmarks(),
        bookmarkAPI.getCategories(),
        bookmarkAPI.getStats()
      ]);

      setBookmarks(bookmarksData);
      setCategories(categoriesData);
      setStats(statsData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
      // Use mock data as fallback
      setCategories([
        { id: '1', name: 'Development', color: '#3b82f6', icon: '💻', count: 0 },
        { id: '2', name: 'Design', color: '#8b5cf6', icon: '🎨', count: 0 },
        { id: '3', name: 'Learning', color: '#10b981', icon: '📚', count: 0 },
        { id: '4', name: 'Career', color: '#f59e0b', icon: '💼', count: 0 },
      ]);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    activeView,
    selectedCategory,
    searchQuery,
    bookmarks,
    categories,
    stats,
    showAddModal,
    loading,
    setActiveView,
    setSelectedCategory,
    setSearchQuery,
    setShowAddModal,
    fetchData
  };
};