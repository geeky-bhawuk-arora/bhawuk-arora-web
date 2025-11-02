// src/pages/AdminPanel.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminHeader from '../components/admin/AdminHeader';
import DashboardView from '../components/admin/DashboardView';
import BookmarksView from '../components/admin/BookmarksView';
import AddBookmarkModal from '../components/admin/AddBookmarkModal';
import bookmarkApi from '../services/bookmarkApi';
import { useAdminStore } from '../hooks/useAdminStore';

const AdminPanel = () => {
  const {
    activeView,
    selectedCategory,
    searchQuery,
    bookmarks,
    categories,
    stats,
    showAddModal,
    setActiveView,
    setSelectedCategory,
    setSearchQuery,
    setShowAddModal,
    fetchData
  } = useAdminStore();

  useEffect(() => {
    fetchData();
  }, []);

  const filteredBookmarks = bookmarks.filter(bm => {
    const matchesSearch = bm.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         bm.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || bm.category_id === selectedCategory;
    const matchesFavorites = activeView !== 'favorites' || bm.is_favorite;
    
    return matchesSearch && matchesCategory && matchesFavorites;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="flex h-screen relative z-10">
        <AdminSidebar 
          activeView={activeView}
          selectedCategory={selectedCategory}
          categories={categories}
          onViewChange={setActiveView}
          onCategorySelect={setSelectedCategory}
          onAddClick={() => setShowAddModal(true)}
        />

        <div className="flex-1 flex flex-col overflow-hidden">
          <AdminHeader
            activeView={activeView}
            selectedCategory={selectedCategory}
            categories={categories}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <div className="flex-1 overflow-y-auto p-6">
            <AnimatePresence mode="wait">
              {activeView === 'dashboard' ? (
                <DashboardView 
                  key="dashboard"
                  stats={stats}
                  bookmarks={bookmarks}
                  categories={categories}
                />
              ) : (
                <BookmarksView
                  key="bookmarks"
                  bookmarks={filteredBookmarks}
                  categories={categories}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AddBookmarkModal
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        categories={categories}
      />
    </div>
  );
};

export default AdminPanel;