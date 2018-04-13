from django.contrib import admin


# Register your models here.
# from .models import Artist, Album, Song
#
#
# # The StackedInline class shows all model stacked up on top of each other
# # the TabularInline class shows model fields condensed on same line
# 
# # class SongInline(admin.StackedInline):
# class SongInline(admin.TabularInline):
#     model = Song
#     extra = 3
#
# # "extra" defines how many blank fields appear at the bottom
# #  of the list for adding new songs
# class AlbumInline(admin.StackedInline):
#     model = Album
#     extra = 2
#
# class AlbumAdmin(admin.ModelAdmin):
#     inlines = [SongInline]
#
# class ArtistAdmin(admin.ModelAdmin):
#     inlines = [AlbumInline]
#
#
#
#
#
#
#
# # Register Artist and Album with their custom Admin interfaces
# admin.site.register(Artist, ArtistAdmin)
# admin.site.register(Album, AlbumAdmin)
#
# # We haven't customized Song. Register it as itself and take
# # Django default admin interface.
# admin.site.register(Song)
