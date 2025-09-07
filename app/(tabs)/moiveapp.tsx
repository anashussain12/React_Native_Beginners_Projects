// MovieApp.tsx
import React, { useState } from "react";
import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

type Movie = {
  id: string;
  title: string;
  year: string;
  rating: number;
  poster: string;
};

const MOCK_MOVIES: Movie[] = [
  {
    id: "1",
    title: "Inception",
    year: "2010",
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
  },
  {
    id: "2",
    title: "The Dark Knight",
    year: "2008",
    rating: 9.0,
    poster: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
  },
  {
    id: "3",
    title: "Interstellar",
    year: "2014",
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: "4",
    title: "Avengers: Endgame",
    year: "2019",
    rating: 8.4,
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    id: "5",
    title: "Spider-Man: No Way Home",
    year: "2021",
    rating: 8.3,
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
  },
];

const { width } = Dimensions.get("window");

export default function MovieApp(): any {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>(MOCK_MOVIES);

  const onSearch = () => {
    const q = query.trim().toLowerCase();
    if (!q) {
      setMovies(MOCK_MOVIES);
      return;
    }
    setMovies(
      MOCK_MOVIES.filter(
        (m) => m.title.toLowerCase().includes(q) || m.year.includes(q)
      )
    );
  };

  const renderFeatured = ({ item }: { item: Movie }) => (
    <TouchableOpacity style={styles.featuredCard} activeOpacity={0.8}>
      <Image source={{ uri: item.poster }} style={styles.featuredPoster} />
      <View style={styles.featuredInfo}>
        <Text numberOfLines={1} style={styles.featuredTitle}>
          {item.title}
        </Text>
        <Text style={styles.featuredMeta}>
          {item.year} • ⭐ {item.rating}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderMovie = ({ item }: { item: Movie }) => (
    <TouchableOpacity style={styles.movieRow} activeOpacity={0.85}>
      <Image source={{ uri: item.poster }} style={styles.poster} />
      <View style={styles.movieInfo}>
        <Text numberOfLines={2} style={styles.movieTitle}>
          {item.title}
        </Text>
        <Text style={styles.movieYear}>Year: {item.year}</Text>
        <Text style={styles.movieRating}>Rating: ⭐ {item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🎞️ MovieBox</Text>

      {/* Search */}
      <View style={styles.searchRow}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search movies or year..."
          placeholderTextColor="#9aa0ac"
          value={query}
          onChangeText={setQuery}
          returnKeyType="search"
          onSubmitEditing={onSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={onSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Featured */}
      <Text style={styles.sectionTitle}>Featured</Text>
      <FlatList
        data={movies.slice(0, 3)}
        keyExtractor={(i) => i.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 20 }}
        renderItem={renderFeatured}
        ItemSeparatorComponent={() => <View style={{ width: 14 }} />}
      />

      {/* All Movies */}
      <Text style={[styles.sectionTitle, { marginTop: 18 }]}>All Movies</Text>
      <FlatList
        data={movies}
        keyExtractor={(i) => i.id}
        renderItem={renderMovie}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        style={{ marginTop: 8 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f1724", paddingTop: 50 },
  header: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 14,
  },
  searchRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#111827",
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: "#2563eb",
    borderRadius: 10,
    paddingHorizontal: 14,
    justifyContent: "center",
  },
  searchButtonText: { color: "#fff", fontWeight: "600" },
  sectionTitle: {
    color: "#cbd5e1",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 20,
    marginBottom: 8,
  },
  featuredCard: {
    width: Math.round(width * 0.55),
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#111827",
  },
  featuredPoster: { width: "100%", height: 200, resizeMode: "cover" },
  featuredInfo: { padding: 10 },
  featuredTitle: { color: "#fff", fontSize: 16, fontWeight: "700" },
  featuredMeta: { color: "#9aa0ac", marginTop: 6 },
  movieRow: {
    flexDirection: "row",
    backgroundColor: "#071029",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    padding: 8,
  },
  poster: {
    width: 90,
    height: 130,
    borderRadius: 6,
    backgroundColor: "#14213d",
  },
  movieInfo: { marginLeft: 12, flex: 1 },
  movieTitle: { color: "#fff", fontSize: 16, fontWeight: "700" },
  movieYear: { color: "#9aa0ac", marginTop: 8 },
  movieRating: { color: "#fbbf24", marginTop: 8, fontWeight: "600" },
});
